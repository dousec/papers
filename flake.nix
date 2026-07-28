{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";

    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };

    bun2nix.url = "github:nix-community/bun2nix?ref=2.1.2";
    bun2nix.inputs.nixpkgs.follows = "nixpkgs";

    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  nixConfig = {
    extra-substituters = [
      "https://nix-community.cachix.org"
    ];
    extra-trusted-public-keys = [
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
    ];
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.treefmt-nix.flakeModule
      ];

      systems = [ "x86_64-linux" ];

      perSystem =
        {
          system,
          config,
          pkgs,
          ...
        }:
        {
          _module.args.pkgs = import inputs.nixpkgs {
            inherit system;
            overlays = [
              inputs.bun2nix.overlays.default
            ];
          };

          packages.default = pkgs.callPackage ./default.nix { };

          formatter = config.treefmt.build.wrapper;

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              bashInteractive
              bun
              bun2nix
            ];

            shellHook = ''
              bun install --frozen-lockfile
            '';
          };

          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              nixfmt.enable = true;
              deadnix.enable = true;
              biome = {
                enable = true;
                formatCommand = "format";
                settings.files.maxSize = 2097152;
                excludes = [ "public/pdfjs/pdf.worker.min.mjs" ];
              };
            };
          };
        };
    };
}
