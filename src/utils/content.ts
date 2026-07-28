export function taxonomySlug(value: string) {
	const slug = Array.from(value.trim().normalize("NFKC"))
		.map((character) => {
			if (/^[\p{L}\p{N}]$/u.test(character) || /^\s$/u.test(character))
				return character;
			if (character === "-") return character;
			return `-${character.codePointAt(0)?.toString(16) ?? "item"}-`;
		})
		.join("")
		.replace(/\s+/g, " ")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "")
		.trim();
	return slug || "item";
}

export const tagPath = (tag: string) => `/papers/tags/${taxonomySlug(tag)}/`;
export const collectionPath = (name: string) =>
	`/papers/collections/${taxonomySlug(name)}/`;
