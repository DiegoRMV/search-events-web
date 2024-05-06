export interface RootObject {
	_embedded: RootObjectEmbedded;
	_links: RootObjectLinks;
	page: Page;
}

export interface RootObjectEmbedded {
	events: Event[];
}

export interface Event {
	_embedded: EventEmbedded;
	_links: EventLinks;
	accessibility?: Accessibility;
	ageRestrictions?: AgeRestrictions;
	classifications: Classification[];
	dates: Dates;
	doorsTimes?: DoorsTimes;
	id: string;
	images: Image[];
	info?: string;
	locale: Locale;
	name: string;
	outlets?: Outlet[];
	pleaseNote?: string;
	priceRanges?: PriceRange[];
	products?: Product[];
	promoter?: Promoter;
	promoters?: Promoter[];
	sales: Sales;
	seatmap: Seatmap;
	test: boolean;
	ticketLimit?: TicketLimit;
	ticketing: Ticketing;
	type: EventType;
	url: string;
}

export interface EventEmbedded {
	attractions: Attraction[];
	venues: Venue[];
}

export interface Attraction {
	_links: AttractionLinks;
	aliases?: string[];
	classifications: Classification[];
	externalLinks: ExternalLinks;
	id: string;
	images: Image[];
	locale: Locale;
	name: string;
	test: boolean;
	type: AttractionType;
	upcomingEvents: { [key: string]: number };
	url: string;
}

export interface AttractionLinks {
	self: First;
}

export interface First {
	href: string;
}

export interface Classification {
	family: boolean;
	genre: Genre;
	primary: boolean;
	segment: Genre;
	subGenre: Genre;
	subType?: Genre;
	type?: Genre;
}

export interface Genre {
	id: string;
	name: string;
}

export interface ExternalLinks {
	facebook: Facebook[];
	homepage: Facebook[];
	instagram?: Facebook[];
	itunes?: Facebook[];
	lastfm?: Facebook[];
	musicbrainz?: Musicbrainz[];
	spotify?: Facebook[];
	twitter?: Facebook[];
	wiki?: Facebook[];
	youtube?: Facebook[];
}

export interface Facebook {
	url: string;
}

export interface Musicbrainz {
	id: string;
}

export interface Image {
	attribution?: string;
	fallback: boolean;
	height: number;
	ratio?: Ratio;
	url: string;
	width: number;
}

export enum Ratio {
	The16_9 = "16_9",
	The3_2 = "3_2",
	The4_3 = "4_3",
}

export enum Locale {
	EnUs = "en-us",
}

export enum AttractionType {
	Attraction = "attraction",
}

export interface Venue {
	_links: AttractionLinks;
	accessibleSeatingDetail?: string;
	ada?: Ada;
	address: Address;
	aliases?: string[];
	boxOfficeInfo?: BoxOfficeInfo;
	city: City;
	country: Country;
	dmas: DMA[];
	generalInfo?: GeneralInfo;
	id: string;
	images?: Image[];
	locale: Locale;
	location: Location;
	markets?: Genre[];
	name: string;
	parkingDetail?: string;
	postalCode: string;
	social?: Social;
	state: State;
	test: boolean;
	timezone: Timezone;
	type: VenueType;
	upcomingEvents: UpcomingEvents;
	url?: string;
}

export interface Ada {
	adaCustomCopy: string;
	adaHours: string;
	adaPhones: string;
}

export interface Address {
	line1: string;
}

export interface BoxOfficeInfo {
	acceptedPaymentDetail: string;
	openHoursDetail: string;
	phoneNumberDetail?: string;
	willCallDetail?: string;
}

export interface City {
	name: string;
}

export interface Country {
	countryCode: CountryCode;
	name: CountryName;
}

export enum CountryCode {
	Us = "US",
}

export enum CountryName {
	UnitedStatesOfAmerica = "United States Of America",
}

export interface DMA {
	id: number;
}

export interface GeneralInfo {
	childRule?: string;
	generalRule?: string;
}

export interface Location {
	latitude: string;
	longitude: string;
}

export interface Social {
	twitter: Twitter;
}

export interface Twitter {
	handle: string;
}

export interface State {
	name: string;
	stateCode: string;
}

export enum Timezone {
	AmericaChicago = "America/Chicago",
	AmericaIndianapolis = "America/Indianapolis",
	AmericaLosAngeles = "America/Los_Angeles",
	AmericaNewYork = "America/New_York",
}

export enum VenueType {
	Venue = "venue",
}

export interface UpcomingEvents {
	_filtered: number;
	_total: number;
	ticketmaster?: number;
	tmr?: number;
}

export interface EventLinks {
	attractions: First[];
	self: First;
	venues: First[];
}

export interface Accessibility {
	id?: AccessibilityID;
	info?: string;
	ticketLimit: number;
	url?: string;
	urlText?: string;
}

export enum AccessibilityID {
	Accessibility = "accessibility",
}

export interface AgeRestrictions {
	id?: AgeRestrictionsID;
	legalAgeEnforced: boolean;
}

export enum AgeRestrictionsID {
	AgeRestrictions = "ageRestrictions",
}

export interface Dates {
	initialStartDate?: DoorsTimes;
	spanMultipleDays: boolean;
	start: Start;
	status: Status;
	timezone?: Timezone;
}

export interface DoorsTimes {
	dateTime: Date;
	id?: string;
	localDate: Date;
	localTime: string;
}

export interface Start {
	dateTBA: boolean;
	dateTBD: boolean;
	dateTime?: Date;
	localDate: Date;
	localTime?: string;
	noSpecificTime: boolean;
	timeTBA: boolean;
}

export interface Status {
	code: Code;
}

export enum Code {
	Onsale = "onsale",
	Rescheduled = "rescheduled",
}

export interface Outlet {
	type: string;
	url: string;
}

export interface PriceRange {
	currency: Currency;
	max: number;
	min: number;
	type: PriceRangeType;
}

export enum Currency {
	Usd = "USD",
}

export enum PriceRangeType {
	Standard = "standard",
}

export interface Product {
	classifications: Classification[];
	id: string;
	name: string;
	type: string;
	url: string;
}

export interface Promoter {
	description: Description;
	id: string;
	name: PromoterName;
}

export enum Description {
	LiveNationMusicNtlUsa = "LIVE NATION MUSIC / NTL / USA",
	PromotedByVenueNtlUsa = "PROMOTED BY VENUE / NTL / USA",
}

export enum PromoterName {
	LiveNationMusic = "LIVE NATION MUSIC",
	PromotedByVenue = "PROMOTED BY VENUE",
}

export interface Sales {
	presales?: Presale[];
	public: Public;
}

export interface Presale {
	description?: string;
	endDateTime: Date;
	name: string;
	startDateTime: Date;
}

export interface Public {
	endDateTime: Date;
	startDateTime: Date;
	startTBA: boolean;
	startTBD: boolean;
}

export interface Seatmap {
	id?: SeatmapID;
	staticUrl: string;
}

export enum SeatmapID {
	Seatmap = "seatmap",
}

export interface TicketLimit {
	id?: TicketLimitID;
	info: string;
}

export enum TicketLimitID {
	TicketLimit = "ticketLimit",
}

export interface Ticketing {
	allInclusivePricing: AllInclusivePricing;
	id?: TicketingID;
	safeTix?: AllInclusivePricing;
}

export interface AllInclusivePricing {
	enabled: boolean;
}

export enum TicketingID {
	Ticketing = "ticketing",
}

export enum EventType {
	Event = "event",
}

export interface RootObjectLinks {
	first: First;
	last: First;
	next: First;
	self: First;
}

export interface Page {
	number: number;
	size: number;
	totalElements: number;
	totalPages: number;
}
