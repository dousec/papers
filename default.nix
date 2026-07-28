{
  bun2nix,
  stdenv,
  ...
}:

stdenv.mkDerivation {
  pname = "dou-papers";
  version = "0.1.0";

  src = ./.;

  nativeBuildInputs = [
    bun2nix.hook
  ];

  bunInstallFlags = [ "--linker=hoisted" ];

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ./bun.nix;
  };

  buildPhase = ''
    bun run build
  '';

}
