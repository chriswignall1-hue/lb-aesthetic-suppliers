declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		"products": {
"autoclave-pouches": {
	id: "autoclave-pouches";
  collection: "products";
  data: InferEntrySchema<"products">
};
"barbicide-concentrate": {
	id: "barbicide-concentrate";
  collection: "products";
  data: InferEntrySchema<"products">
};
"beauty-trolley": {
	id: "beauty-trolley";
  collection: "products";
  data: InferEntrySchema<"products">
};
"brow-tint-kit": {
	id: "brow-tint-kit";
  collection: "products";
  data: InferEntrySchema<"products">
};
"couch-roll": {
	id: "couch-roll";
  collection: "products";
  data: InferEntrySchema<"products">
};
"disposable-aprons": {
	id: "disposable-aprons";
  collection: "products";
  data: InferEntrySchema<"products">
};
"eye-contour-cream": {
	id: "eye-contour-cream";
  collection: "products";
  data: InferEntrySchema<"products">
};
"face-masks": {
	id: "face-masks";
  collection: "products";
  data: InferEntrySchema<"products">
};
"facial-spatula-set": {
	id: "facial-spatula-set";
  collection: "products";
  data: InferEntrySchema<"products">
};
"facial-steamer": {
	id: "facial-steamer";
  collection: "products";
  data: InferEntrySchema<"products">
};
"foaming-cleanser": {
	id: "foaming-cleanser";
  collection: "products";
  data: InferEntrySchema<"products">
};
"hand-sanitiser": {
	id: "hand-sanitiser";
  collection: "products";
  data: InferEntrySchema<"products">
};
"hard-wax-beans": {
	id: "hard-wax-beans";
  collection: "products";
  data: InferEntrySchema<"products">
};
"hyaluronic-acid-serum": {
	id: "hyaluronic-acid-serum";
  collection: "products";
  data: InferEntrySchema<"products">
};
"lash-adhesive": {
	id: "lash-adhesive";
  collection: "products";
  data: InferEntrySchema<"products">
};
"lash-lift-kit": {
	id: "lash-lift-kit";
  collection: "products";
  data: InferEntrySchema<"products">
};
"lash-mapping-stickers": {
	id: "lash-mapping-stickers";
  collection: "products";
  data: InferEntrySchema<"products">
};
"lash-tweezers": {
	id: "lash-tweezers";
  collection: "products";
  data: InferEntrySchema<"products">
};
"latex-gloves": {
	id: "latex-gloves";
  collection: "products";
  data: InferEntrySchema<"products">
};
"magnifying-lamp": {
	id: "magnifying-lamp";
  collection: "products";
  data: InferEntrySchema<"products">
};
"nitrile-gloves": {
	id: "nitrile-gloves";
  collection: "products";
  data: InferEntrySchema<"products">
};
"post-wax-oil": {
	id: "post-wax-oil";
  collection: "products";
  data: InferEntrySchema<"products">
};
"pre-wax-lotion": {
	id: "pre-wax-lotion";
  collection: "products";
  data: InferEntrySchema<"products">
};
"spf50-moisturiser": {
	id: "spf50-moisturiser";
  collection: "products";
  data: InferEntrySchema<"products">
};
"surface-disinfectant": {
	id: "surface-disinfectant";
  collection: "products";
  data: InferEntrySchema<"products">
};
"towel-warmer": {
	id: "towel-warmer";
  collection: "products";
  data: InferEntrySchema<"products">
};
"vinyl-gloves": {
	id: "vinyl-gloves";
  collection: "products";
  data: InferEntrySchema<"products">
};
"vitamin-c-serum": {
	id: "vitamin-c-serum";
  collection: "products";
  data: InferEntrySchema<"products">
};
"wax-heater": {
	id: "wax-heater";
  collection: "products";
  data: InferEntrySchema<"products">
};
"waxing-strips": {
	id: "waxing-strips";
  collection: "products";
  data: InferEntrySchema<"products">
};
};
"settings": {
"site": {
	id: "site";
  collection: "settings";
  data: InferEntrySchema<"settings">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
