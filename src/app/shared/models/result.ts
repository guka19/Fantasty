export interface Result {
    count:   number;
    results: Recipe[];
}

export interface Recipe {
    servings_noun_plural:     ServingsNounPlural;
    prep_time_minutes:        number | null;
    sections:                 Section[];
    num_servings:             number;
    aspect_ratio:             AspectRatio | null;
    cook_time_minutes:        number | null;
    original_video_url:       null | string;
    canonical_id:             string;
    show_id:                  number;
    description:              string;
    inspired_by_url:          null | string;
    is_one_top:               boolean;
    buzz_id:                  number | null;
    seo_title:                null | string;
    language:                 Language;
    tags:                     Tag[];
    is_app_only:              boolean;
    updated_at:               number;
    credits:                  Credit[];
    approved_at:              number;
    user_ratings:             UserRatings;
    is_subscriber_content:    boolean;
    brand_id:                 null;
    thumbnail_url:            string;
    instructions:             Instruction[];
    keywords:                 string;
    id:                       number;
    compilations:             Compilation[];
    total_time_minutes:       number | null;
    nutrition_visibility:     NutritionVisibility;
    created_at:               number;
    seo_path:                 string;
    name:                     string;
    thumbnail_alt_text:       string;
    yields:                   string;
    price:                    Price;
    show:                     Show;
    video_url:                null | string;
    renditions:               Rendition[];
    video_ad_content:         VideoAdContent | null;
    promotion:                Promotion;
    country:                  Country;
    beauty_url:               null | string;
    video_id:                 number | null;
    facebook_posts:           any[];
    brand:                    null;
    slug:                     string;
    servings_noun_singular:   ServingsNounSingular;
    nutrition:                Nutrition;
    draft_status:             DraftStatus;
    topics:                   Topic[];
    tips_and_ratings_enabled: boolean;
    is_shoppable:             boolean;
    total_time_tier:          TotalTimeTier | null;
}

export enum AspectRatio {
    The11 = "1:1",
    The169 = "16:9",
}

export interface Compilation {
    slug:               string;
    country:            Country;
    is_shoppable:       boolean;
    description:        null | string;
    thumbnail_alt_text: string;
    buzz_id:            number | null;
    aspect_ratio:       AspectRatio | null;
    keywords:           null;
    name:               string;
    beauty_url:         null;
    show:               Show[];
    created_at:         number;
    language:           Language;
    thumbnail_url:      string;
    video_url:          string;
    promotion:          Promotion;
    video_id:           number;
    facebook_posts:     any[];
    draft_status:       DraftStatus;
    approved_at:        number;
    canonical_id:       string;
    id:                 number;
}

export enum Country {
    Us = "US",
    Zz = "ZZ",
}

export enum DraftStatus {
    Published = "published",
}

export enum Language {
    Eng = "eng",
    Und = "und",
}

export enum Promotion {
    Full = "full",
    Partial = "partial",
}

export interface Show {
    name: ShowName;
    id:   number;
}

export enum ShowName {
    Goodful = "Goodful",
    Tasty = "Tasty",
    TastyTastyGrill = "Tasty: Tasty Grill",
}

export interface Credit {
    name: null | string;
    type: Type;
}

export enum Type {
    Community = "community",
    Internal = "internal",
}

export interface Instruction {
    position:     number;
    display_text: string;
    start_time:   number;
    appliance:    Appliance | null;
    end_time:     number;
    temperature:  number | null;
    id:           number;
}

export enum Appliance {
    FoodThermometer = "food_thermometer",
    Oven = "oven",
}

export interface Nutrition {
    updated_at?:    Date;
    protein?:       number;
    fat?:           number;
    calories?:      number;
    sugar?:         number;
    carbohydrates?: number;
    fiber?:         number;
}

export enum NutritionVisibility {
    Auto = "auto",
}

export interface Price {
    consumption_total:   number;
    consumption_portion: number;
    total:               number;
    updated_at:          Date;
    portion:             number;
}

export interface Rendition {
    height:           number;
    file_size:        number | null;
    url:              string;
    aspect:           Aspect;
    width:            number;
    minimum_bit_rate: number | null;
    name:             RenditionName;
    maximum_bit_rate: number | null;
    container:        Container;
    poster_url:       string;
    duration:         number;
    bit_rate:         number | null;
    content_type:     ContentType;
}

export enum Aspect {
    Square = "square",
}

export enum Container {
    Mp4 = "mp4",
    Ts = "ts",
}

export enum ContentType {
    ApplicationVndAppleMpegurl = "application/vnd.apple.mpegurl",
    VideoMp4 = "video/mp4",
}

export enum RenditionName {
    Low = "low",
    Mp4320X320 = "mp4_320x320",
    Mp4480X480 = "mp4_480x480",
    Mp4640X640 = "mp4_640x640",
    Mp4720X720 = "mp4_720x720",
}

export interface Section {
    components: Component[];
    name:       null | string;
    position:   number;
}

export interface Component {
    raw_text:      string;
    extra_comment: string;
    ingredient:    Ingredient;
    id:            number;
    position:      number;
    measurements:  Measurement[];
}

export interface Ingredient {
    created_at:       number;
    display_plural:   string;
    id:               number;
    display_singular: string;
    updated_at:       number;
    name:             string;
}

export interface Measurement {
    unit:     Unit;
    quantity: string;
    id:       number;
}

export interface Unit {
    name:             string;
    display_plural:   string;
    display_singular: string;
    abbreviation:     string;
    system:           VideoAdContent;
}

export enum VideoAdContent {
    Imperial = "imperial",
    Metric = "metric",
    None = "none",
}

export enum ServingsNounPlural {
    Cookies = "cookies",
    Servings = "servings",
    Tacos = "tacos",
}

export enum ServingsNounSingular {
    Cookie = "cookie",
    Serving = "serving",
    Taco = "taco",
}

export interface Tag {
    type:          string;
    root_tag_type: RootTagType;
    name:          string;
    id:            number;
    display_name:  string;
}

export enum RootTagType {
    Appliance = "appliance",
    BusinessTags = "business_tags",
    CookingStyle = "cooking_style",
    Cuisine = "cuisine",
    Dietary = "dietary",
    Difficulty = "difficulty",
    Equipment = "equipment",
    FeaturePage = "feature_page",
    Healthy = "healthy",
    Meal = "meal",
    Occasion = "occasion",
    Seasonal = "seasonal",
}

export interface Topic {
    name: string;
    slug: string;
}

export interface TotalTimeTier {
    tier:         Tier;
    display_tier: DisplayTier;
}

export enum DisplayTier {
    Under15Hours = "Under 1.5 hours",
    Under30Minutes = "Under 30 minutes",
}

export enum Tier {
    Under15_Hours = "under_1.5_hours",
    Under30_Minutes = "under_30_minutes",
}

export interface UserRatings {
    count_positive: number;
    score:          number;
    count_negative: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toResult(json: string): Result {
        return cast(JSON.parse(json), r("Result"));
    }

    public static resultToJson(value: Result): string {
        return JSON.stringify(uncast(value, r("Result")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Result": o([
        { json: "count", js: "count", typ: 0 },
        { json: "results", js: "results", typ: a(r("ResultElement")) },
    ], false),
    "ResultElement": o([
        { json: "servings_noun_plural", js: "servings_noun_plural", typ: r("ServingsNounPlural") },
        { json: "prep_time_minutes", js: "prep_time_minutes", typ: u(0, null) },
        { json: "sections", js: "sections", typ: a(r("Section")) },
        { json: "num_servings", js: "num_servings", typ: 0 },
        { json: "aspect_ratio", js: "aspect_ratio", typ: u(r("AspectRatio"), null) },
        { json: "cook_time_minutes", js: "cook_time_minutes", typ: u(0, null) },
        { json: "original_video_url", js: "original_video_url", typ: u(null, "") },
        { json: "canonical_id", js: "canonical_id", typ: "" },
        { json: "show_id", js: "show_id", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "inspired_by_url", js: "inspired_by_url", typ: u(null, "") },
        { json: "is_one_top", js: "is_one_top", typ: true },
        { json: "buzz_id", js: "buzz_id", typ: u(0, null) },
        { json: "seo_title", js: "seo_title", typ: u(null, "") },
        { json: "language", js: "language", typ: r("Language") },
        { json: "tags", js: "tags", typ: a(r("Tag")) },
        { json: "is_app_only", js: "is_app_only", typ: true },
        { json: "updated_at", js: "updated_at", typ: 0 },
        { json: "credits", js: "credits", typ: a(r("Credit")) },
        { json: "approved_at", js: "approved_at", typ: 0 },
        { json: "user_ratings", js: "user_ratings", typ: r("UserRatings") },
        { json: "is_subscriber_content", js: "is_subscriber_content", typ: true },
        { json: "brand_id", js: "brand_id", typ: null },
        { json: "thumbnail_url", js: "thumbnail_url", typ: "" },
        { json: "instructions", js: "instructions", typ: a(r("Instruction")) },
        { json: "keywords", js: "keywords", typ: "" },
        { json: "id", js: "id", typ: 0 },
        { json: "compilations", js: "compilations", typ: a(r("Compilation")) },
        { json: "total_time_minutes", js: "total_time_minutes", typ: u(0, null) },
        { json: "nutrition_visibility", js: "nutrition_visibility", typ: r("NutritionVisibility") },
        { json: "created_at", js: "created_at", typ: 0 },
        { json: "seo_path", js: "seo_path", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "thumbnail_alt_text", js: "thumbnail_alt_text", typ: "" },
        { json: "yields", js: "yields", typ: "" },
        { json: "price", js: "price", typ: r("Price") },
        { json: "show", js: "show", typ: r("Show") },
        { json: "video_url", js: "video_url", typ: u(null, "") },
        { json: "renditions", js: "renditions", typ: a(r("Rendition")) },
        { json: "video_ad_content", js: "video_ad_content", typ: u(r("VideoAdContent"), null) },
        { json: "promotion", js: "promotion", typ: r("Promotion") },
        { json: "country", js: "country", typ: r("Country") },
        { json: "beauty_url", js: "beauty_url", typ: u(null, "") },
        { json: "video_id", js: "video_id", typ: u(0, null) },
        { json: "facebook_posts", js: "facebook_posts", typ: a("any") },
        { json: "brand", js: "brand", typ: null },
        { json: "slug", js: "slug", typ: "" },
        { json: "servings_noun_singular", js: "servings_noun_singular", typ: r("ServingsNounSingular") },
        { json: "nutrition", js: "nutrition", typ: r("Nutrition") },
        { json: "draft_status", js: "draft_status", typ: r("DraftStatus") },
        { json: "topics", js: "topics", typ: a(r("Topic")) },
        { json: "tips_and_ratings_enabled", js: "tips_and_ratings_enabled", typ: true },
        { json: "is_shoppable", js: "is_shoppable", typ: true },
        { json: "total_time_tier", js: "total_time_tier", typ: u(r("TotalTimeTier"), null) },
    ], false),
    "Compilation": o([
        { json: "slug", js: "slug", typ: "" },
        { json: "country", js: "country", typ: r("Country") },
        { json: "is_shoppable", js: "is_shoppable", typ: true },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "thumbnail_alt_text", js: "thumbnail_alt_text", typ: "" },
        { json: "buzz_id", js: "buzz_id", typ: u(0, null) },
        { json: "aspect_ratio", js: "aspect_ratio", typ: u(r("AspectRatio"), null) },
        { json: "keywords", js: "keywords", typ: null },
        { json: "name", js: "name", typ: "" },
        { json: "beauty_url", js: "beauty_url", typ: null },
        { json: "show", js: "show", typ: a(r("Show")) },
        { json: "created_at", js: "created_at", typ: 0 },
        { json: "language", js: "language", typ: r("Language") },
        { json: "thumbnail_url", js: "thumbnail_url", typ: "" },
        { json: "video_url", js: "video_url", typ: "" },
        { json: "promotion", js: "promotion", typ: r("Promotion") },
        { json: "video_id", js: "video_id", typ: 0 },
        { json: "facebook_posts", js: "facebook_posts", typ: a("any") },
        { json: "draft_status", js: "draft_status", typ: r("DraftStatus") },
        { json: "approved_at", js: "approved_at", typ: 0 },
        { json: "canonical_id", js: "canonical_id", typ: "" },
        { json: "id", js: "id", typ: 0 },
    ], false),
    "Show": o([
        { json: "name", js: "name", typ: r("ShowName") },
        { json: "id", js: "id", typ: 0 },
    ], false),
    "Credit": o([
        { json: "name", js: "name", typ: u(null, "") },
        { json: "type", js: "type", typ: r("Type") },
    ], false),
    "Instruction": o([
        { json: "position", js: "position", typ: 0 },
        { json: "display_text", js: "display_text", typ: "" },
        { json: "start_time", js: "start_time", typ: 0 },
        { json: "appliance", js: "appliance", typ: u(r("Appliance"), null) },
        { json: "end_time", js: "end_time", typ: 0 },
        { json: "temperature", js: "temperature", typ: u(0, null) },
        { json: "id", js: "id", typ: 0 },
    ], false),
    "Nutrition": o([
        { json: "updated_at", js: "updated_at", typ: u(undefined, Date) },
        { json: "protein", js: "protein", typ: u(undefined, 0) },
        { json: "fat", js: "fat", typ: u(undefined, 0) },
        { json: "calories", js: "calories", typ: u(undefined, 0) },
        { json: "sugar", js: "sugar", typ: u(undefined, 0) },
        { json: "carbohydrates", js: "carbohydrates", typ: u(undefined, 0) },
        { json: "fiber", js: "fiber", typ: u(undefined, 0) },
    ], false),
    "Price": o([
        { json: "consumption_total", js: "consumption_total", typ: 0 },
        { json: "consumption_portion", js: "consumption_portion", typ: 0 },
        { json: "total", js: "total", typ: 0 },
        { json: "updated_at", js: "updated_at", typ: Date },
        { json: "portion", js: "portion", typ: 0 },
    ], false),
    "Rendition": o([
        { json: "height", js: "height", typ: 0 },
        { json: "file_size", js: "file_size", typ: u(0, null) },
        { json: "url", js: "url", typ: "" },
        { json: "aspect", js: "aspect", typ: r("Aspect") },
        { json: "width", js: "width", typ: 0 },
        { json: "minimum_bit_rate", js: "minimum_bit_rate", typ: u(0, null) },
        { json: "name", js: "name", typ: r("RenditionName") },
        { json: "maximum_bit_rate", js: "maximum_bit_rate", typ: u(0, null) },
        { json: "container", js: "container", typ: r("Container") },
        { json: "poster_url", js: "poster_url", typ: "" },
        { json: "duration", js: "duration", typ: 0 },
        { json: "bit_rate", js: "bit_rate", typ: u(0, null) },
        { json: "content_type", js: "content_type", typ: r("ContentType") },
    ], false),
    "Section": o([
        { json: "components", js: "components", typ: a(r("Component")) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "position", js: "position", typ: 0 },
    ], false),
    "Component": o([
        { json: "raw_text", js: "raw_text", typ: "" },
        { json: "extra_comment", js: "extra_comment", typ: "" },
        { json: "ingredient", js: "ingredient", typ: r("Ingredient") },
        { json: "id", js: "id", typ: 0 },
        { json: "position", js: "position", typ: 0 },
        { json: "measurements", js: "measurements", typ: a(r("Measurement")) },
    ], false),
    "Ingredient": o([
        { json: "created_at", js: "created_at", typ: 0 },
        { json: "display_plural", js: "display_plural", typ: "" },
        { json: "id", js: "id", typ: 0 },
        { json: "display_singular", js: "display_singular", typ: "" },
        { json: "updated_at", js: "updated_at", typ: 0 },
        { json: "name", js: "name", typ: "" },
    ], false),
    "Measurement": o([
        { json: "unit", js: "unit", typ: r("Unit") },
        { json: "quantity", js: "quantity", typ: "" },
        { json: "id", js: "id", typ: 0 },
    ], false),
    "Unit": o([
        { json: "name", js: "name", typ: "" },
        { json: "display_plural", js: "display_plural", typ: "" },
        { json: "display_singular", js: "display_singular", typ: "" },
        { json: "abbreviation", js: "abbreviation", typ: "" },
        { json: "system", js: "system", typ: r("VideoAdContent") },
    ], false),
    "Tag": o([
        { json: "type", js: "type", typ: "" },
        { json: "root_tag_type", js: "root_tag_type", typ: r("RootTagType") },
        { json: "name", js: "name", typ: "" },
        { json: "id", js: "id", typ: 0 },
        { json: "display_name", js: "display_name", typ: "" },
    ], false),
    "Topic": o([
        { json: "name", js: "name", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "TotalTimeTier": o([
        { json: "tier", js: "tier", typ: r("Tier") },
        { json: "display_tier", js: "display_tier", typ: r("DisplayTier") },
    ], false),
    "UserRatings": o([
        { json: "count_positive", js: "count_positive", typ: 0 },
        { json: "score", js: "score", typ: 3.14 },
        { json: "count_negative", js: "count_negative", typ: 0 },
    ], false),
    "AspectRatio": [
        "1:1",
        "16:9",
    ],
    "Country": [
        "US",
        "ZZ",
    ],
    "DraftStatus": [
        "published",
    ],
    "Language": [
        "eng",
        "und",
    ],
    "Promotion": [
        "full",
        "partial",
    ],
    "ShowName": [
        "Goodful",
        "Tasty",
        "Tasty: Tasty Grill",
    ],
    "Type": [
        "community",
        "internal",
    ],
    "Appliance": [
        "food_thermometer",
        "oven",
    ],
    "NutritionVisibility": [
        "auto",
    ],
    "Aspect": [
        "square",
    ],
    "Container": [
        "mp4",
        "ts",
    ],
    "ContentType": [
        "application/vnd.apple.mpegurl",
        "video/mp4",
    ],
    "RenditionName": [
        "low",
        "mp4_320x320",
        "mp4_480x480",
        "mp4_640x640",
        "mp4_720x720",
    ],
    "VideoAdContent": [
        "imperial",
        "metric",
        "none",
    ],
    "ServingsNounPlural": [
        "cookies",
        "servings",
        "tacos",
    ],
    "ServingsNounSingular": [
        "cookie",
        "serving",
        "taco",
    ],
    "RootTagType": [
        "appliance",
        "business_tags",
        "cooking_style",
        "cuisine",
        "dietary",
        "difficulty",
        "equipment",
        "feature_page",
        "healthy",
        "meal",
        "occasion",
        "seasonal",
    ],
    "DisplayTier": [
        "Under 1.5 hours",
        "Under 30 minutes",
    ],
    "Tier": [
        "under_1.5_hours",
        "under_30_minutes",
    ],
};
