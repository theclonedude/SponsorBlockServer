import { HashedValue } from "./hash.model";
import { SBRecord } from "./lib.model";
import { UserID } from "./user.model";

export type SegmentUUID = string  & { __segmentUUIDBrand: unknown };
export type VideoID = string & { __videoIDBrand: unknown };
export type VideoDuration = number & { __videoDurationBrand: unknown };
export type Category = ("sponsor" | "selfpromo" | "interaction" | "intro" | "outro" | "preview" | "music_offtopic" | "highlight") & { __categoryBrand: unknown };
export type VideoIDHash = VideoID & HashedValue;
export type IPAddress = string & { __ipAddressBrand: unknown };
export type HashedIP = IPAddress & HashedValue;

// Uncomment as needed
export enum Service {
    YouTube = 'YouTube',
    PeerTube = 'PeerTube',
    // Twitch = 'Twitch',
    // Nebula = 'Nebula',
    // RSS = 'RSS',
    // Corridor = 'Corridor',
    // Lbry = 'Lbry'
}

export interface IncomingSegment { 
    category: Category; 
    segment: string[]; 
}

export interface Segment { 
    category: Category; 
    segment: number[]; 
    UUID: SegmentUUID;
    videoDuration: VideoDuration;
}

export enum Visibility {
    VISIBLE = 0,
    HIDDEN = 1
}

export interface DBSegment { 
    category: Category; 
    startTime: number;
    endTime: number;
    UUID: SegmentUUID;
    userID: UserID;
    votes: number;
    locked: boolean;
    shadowHidden: Visibility;
    videoID: VideoID;
    videoDuration: VideoDuration;
    reputation: number;
    hashedVideoID: VideoIDHash;
}

export interface OverlappingSegmentGroup {
    segments: DBSegment[],
    votes: number;
    locked: boolean; // Contains a locked segment
    reputation: number;
}

export interface VotableObject {
    votes: number;
    reputation: number;
}

export interface VotableObjectWithWeight extends VotableObject {
    weight: number;
}

export interface VideoData {
    hash: VideoIDHash;
    segments: Segment[];
}

export interface SegmentCache {
    shadowHiddenSegmentIPs: SBRecord<VideoID, {hashedIP: HashedIP}[]>,
    userHashedIP?: HashedIP
}

export enum CategoryActionType {
    Skippable,
    POI
}