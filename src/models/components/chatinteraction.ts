/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Document,
  Document$inboundSchema,
  Document$Outbound,
  Document$outboundSchema,
} from "./document.js";

/**
 * The data related to the data warehouse integration
 */
export type DwData = {};

/**
 * The metadata associated with the interaction
 */
export type ChatInteractionMetadata = {};

export type Two = {};

export type Reference = Two | Document;

export type ChatInteraction = {
  /**
   * The actor (USER or AI) of the interaction
   */
  actor?: string | undefined;
  /**
   * The timestamp when the interaction was created
   */
  createdAt?: string | undefined;
  /**
   * The data related to the data warehouse integration
   */
  dwData?: DwData | null | undefined;
  /**
   * The unique identifier of the interaction
   */
  id?: number | undefined;
  /**
   * The message content of the interaction
   */
  message?: string | undefined;
  /**
   * The metadata associated with the interaction
   */
  metadata?: ChatInteractionMetadata | null | undefined;
  /**
   * The name of the model used for the interaction
   */
  model?: string | null | undefined;
  /**
   * The list of references associated with the interaction
   */
  reference?: Array<Two | Document> | null | undefined;
  /**
   * The ID of the chat thread associated with the interaction
   */
  threadId?: string | undefined;
  /**
   * The timestamp when the interaction occurred
   */
  timestamp?: string | undefined;
  /**
   * The number of credits used by the user for the interaction
   */
  userCredits?: number | null | undefined;
};

/** @internal */
export const DwData$inboundSchema: z.ZodType<DwData, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type DwData$Outbound = {};

/** @internal */
export const DwData$outboundSchema: z.ZodType<
  DwData$Outbound,
  z.ZodTypeDef,
  DwData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DwData$ {
  /** @deprecated use `DwData$inboundSchema` instead. */
  export const inboundSchema = DwData$inboundSchema;
  /** @deprecated use `DwData$outboundSchema` instead. */
  export const outboundSchema = DwData$outboundSchema;
  /** @deprecated use `DwData$Outbound` instead. */
  export type Outbound = DwData$Outbound;
}

/** @internal */
export const ChatInteractionMetadata$inboundSchema: z.ZodType<
  ChatInteractionMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ChatInteractionMetadata$Outbound = {};

/** @internal */
export const ChatInteractionMetadata$outboundSchema: z.ZodType<
  ChatInteractionMetadata$Outbound,
  z.ZodTypeDef,
  ChatInteractionMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatInteractionMetadata$ {
  /** @deprecated use `ChatInteractionMetadata$inboundSchema` instead. */
  export const inboundSchema = ChatInteractionMetadata$inboundSchema;
  /** @deprecated use `ChatInteractionMetadata$outboundSchema` instead. */
  export const outboundSchema = ChatInteractionMetadata$outboundSchema;
  /** @deprecated use `ChatInteractionMetadata$Outbound` instead. */
  export type Outbound = ChatInteractionMetadata$Outbound;
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Two$Outbound = {};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

/** @internal */
export const Reference$inboundSchema: z.ZodType<
  Reference,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => Two$inboundSchema), Document$inboundSchema]);

/** @internal */
export type Reference$Outbound = Two$Outbound | Document$Outbound;

/** @internal */
export const Reference$outboundSchema: z.ZodType<
  Reference$Outbound,
  z.ZodTypeDef,
  Reference
> = z.union([z.lazy(() => Two$outboundSchema), Document$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reference$ {
  /** @deprecated use `Reference$inboundSchema` instead. */
  export const inboundSchema = Reference$inboundSchema;
  /** @deprecated use `Reference$outboundSchema` instead. */
  export const outboundSchema = Reference$outboundSchema;
  /** @deprecated use `Reference$Outbound` instead. */
  export type Outbound = Reference$Outbound;
}

/** @internal */
export const ChatInteraction$inboundSchema: z.ZodType<
  ChatInteraction,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string().optional(),
  created_at: z.string().optional(),
  dw_data: z.nullable(z.lazy(() => DwData$inboundSchema)).optional(),
  id: z.number().int().optional(),
  message: z.string().optional(),
  metadata: z.nullable(z.lazy(() => ChatInteractionMetadata$inboundSchema))
    .optional(),
  model: z.nullable(z.string()).optional(),
  reference: z.nullable(
    z.array(z.union([z.lazy(() => Two$inboundSchema), Document$inboundSchema])),
  ).optional(),
  thread_id: z.string().optional(),
  timestamp: z.string().optional(),
  user_credits: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "dw_data": "dwData",
    "thread_id": "threadId",
    "user_credits": "userCredits",
  });
});

/** @internal */
export type ChatInteraction$Outbound = {
  actor?: string | undefined;
  created_at?: string | undefined;
  dw_data?: DwData$Outbound | null | undefined;
  id?: number | undefined;
  message?: string | undefined;
  metadata?: ChatInteractionMetadata$Outbound | null | undefined;
  model?: string | null | undefined;
  reference?: Array<Two$Outbound | Document$Outbound> | null | undefined;
  thread_id?: string | undefined;
  timestamp?: string | undefined;
  user_credits?: number | null | undefined;
};

/** @internal */
export const ChatInteraction$outboundSchema: z.ZodType<
  ChatInteraction$Outbound,
  z.ZodTypeDef,
  ChatInteraction
> = z.object({
  actor: z.string().optional(),
  createdAt: z.string().optional(),
  dwData: z.nullable(z.lazy(() => DwData$outboundSchema)).optional(),
  id: z.number().int().optional(),
  message: z.string().optional(),
  metadata: z.nullable(z.lazy(() => ChatInteractionMetadata$outboundSchema))
    .optional(),
  model: z.nullable(z.string()).optional(),
  reference: z.nullable(
    z.array(
      z.union([z.lazy(() => Two$outboundSchema), Document$outboundSchema]),
    ),
  ).optional(),
  threadId: z.string().optional(),
  timestamp: z.string().optional(),
  userCredits: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    dwData: "dw_data",
    threadId: "thread_id",
    userCredits: "user_credits",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatInteraction$ {
  /** @deprecated use `ChatInteraction$inboundSchema` instead. */
  export const inboundSchema = ChatInteraction$inboundSchema;
  /** @deprecated use `ChatInteraction$outboundSchema` instead. */
  export const outboundSchema = ChatInteraction$outboundSchema;
  /** @deprecated use `ChatInteraction$Outbound` instead. */
  export type Outbound = ChatInteraction$Outbound;
}
