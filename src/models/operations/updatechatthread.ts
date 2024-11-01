/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Configure response length
 */
export const UpdateChatThreadResponseLength = {
  Short: "SHORT",
  Medium: "MEDIUM",
  Long: "LONG",
} as const;
/**
 * Configure response length
 */
export type UpdateChatThreadResponseLength = ClosedEnum<
  typeof UpdateChatThreadResponseLength
>;

export type UpdateChatThreadRequestBody = {
  /**
   * Configure response length
   */
  responseLength?: UpdateChatThreadResponseLength | null | undefined;
  /**
   * between 0 and 1
   */
  temperature?: number | null | undefined;
  /**
   * System message for the LLM
   */
  systemMessage?: string | null | undefined;
  /**
   * LLM Model to choose from
   */
  model?: string | null | undefined;
};

export type UpdateChatThreadRequest = {
  chatId: string;
  requestBody?: UpdateChatThreadRequestBody | undefined;
};

/** @internal */
export const UpdateChatThreadResponseLength$inboundSchema: z.ZodNativeEnum<
  typeof UpdateChatThreadResponseLength
> = z.nativeEnum(UpdateChatThreadResponseLength);

/** @internal */
export const UpdateChatThreadResponseLength$outboundSchema: z.ZodNativeEnum<
  typeof UpdateChatThreadResponseLength
> = UpdateChatThreadResponseLength$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatThreadResponseLength$ {
  /** @deprecated use `UpdateChatThreadResponseLength$inboundSchema` instead. */
  export const inboundSchema = UpdateChatThreadResponseLength$inboundSchema;
  /** @deprecated use `UpdateChatThreadResponseLength$outboundSchema` instead. */
  export const outboundSchema = UpdateChatThreadResponseLength$outboundSchema;
}

/** @internal */
export const UpdateChatThreadRequestBody$inboundSchema: z.ZodType<
  UpdateChatThreadRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  response_length: z.nullable(
    UpdateChatThreadResponseLength$inboundSchema.default("MEDIUM"),
  ),
  temperature: z.nullable(z.number()).optional(),
  system_message: z.nullable(z.string()).optional(),
  model: z.nullable(z.string().default("gpt-4o-mini")),
}).transform((v) => {
  return remap$(v, {
    "response_length": "responseLength",
    "system_message": "systemMessage",
  });
});

/** @internal */
export type UpdateChatThreadRequestBody$Outbound = {
  response_length: string | null;
  temperature?: number | null | undefined;
  system_message?: string | null | undefined;
  model: string | null;
};

/** @internal */
export const UpdateChatThreadRequestBody$outboundSchema: z.ZodType<
  UpdateChatThreadRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateChatThreadRequestBody
> = z.object({
  responseLength: z.nullable(
    UpdateChatThreadResponseLength$outboundSchema.default("MEDIUM"),
  ),
  temperature: z.nullable(z.number()).optional(),
  systemMessage: z.nullable(z.string()).optional(),
  model: z.nullable(z.string().default("gpt-4o-mini")),
}).transform((v) => {
  return remap$(v, {
    responseLength: "response_length",
    systemMessage: "system_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatThreadRequestBody$ {
  /** @deprecated use `UpdateChatThreadRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateChatThreadRequestBody$inboundSchema;
  /** @deprecated use `UpdateChatThreadRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateChatThreadRequestBody$outboundSchema;
  /** @deprecated use `UpdateChatThreadRequestBody$Outbound` instead. */
  export type Outbound = UpdateChatThreadRequestBody$Outbound;
}

/** @internal */
export const UpdateChatThreadRequest$inboundSchema: z.ZodType<
  UpdateChatThreadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chat_id: z.string(),
  RequestBody: z.lazy(() => UpdateChatThreadRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "chat_id": "chatId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateChatThreadRequest$Outbound = {
  chat_id: string;
  RequestBody?: UpdateChatThreadRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateChatThreadRequest$outboundSchema: z.ZodType<
  UpdateChatThreadRequest$Outbound,
  z.ZodTypeDef,
  UpdateChatThreadRequest
> = z.object({
  chatId: z.string(),
  requestBody: z.lazy(() => UpdateChatThreadRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    chatId: "chat_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatThreadRequest$ {
  /** @deprecated use `UpdateChatThreadRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateChatThreadRequest$inboundSchema;
  /** @deprecated use `UpdateChatThreadRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateChatThreadRequest$outboundSchema;
  /** @deprecated use `UpdateChatThreadRequest$Outbound` instead. */
  export type Outbound = UpdateChatThreadRequest$Outbound;
}
