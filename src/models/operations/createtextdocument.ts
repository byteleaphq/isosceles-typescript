/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateTextDocumentRequestBody = {
  /**
   * Text that is to be added to the brain
   */
  content: string;
  /**
   * Title of the text document. This will also be the filename
   */
  title: string;
};

export type CreateTextDocumentRequest = {
  brainId: string;
  requestBody?: CreateTextDocumentRequestBody | undefined;
};

/** @internal */
export const CreateTextDocumentRequestBody$inboundSchema: z.ZodType<
  CreateTextDocumentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.string(),
  title: z.string(),
});

/** @internal */
export type CreateTextDocumentRequestBody$Outbound = {
  content: string;
  title: string;
};

/** @internal */
export const CreateTextDocumentRequestBody$outboundSchema: z.ZodType<
  CreateTextDocumentRequestBody$Outbound,
  z.ZodTypeDef,
  CreateTextDocumentRequestBody
> = z.object({
  content: z.string(),
  title: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTextDocumentRequestBody$ {
  /** @deprecated use `CreateTextDocumentRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateTextDocumentRequestBody$inboundSchema;
  /** @deprecated use `CreateTextDocumentRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateTextDocumentRequestBody$outboundSchema;
  /** @deprecated use `CreateTextDocumentRequestBody$Outbound` instead. */
  export type Outbound = CreateTextDocumentRequestBody$Outbound;
}

/** @internal */
export const CreateTextDocumentRequest$inboundSchema: z.ZodType<
  CreateTextDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  brain_id: z.string(),
  RequestBody: z.lazy(() => CreateTextDocumentRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateTextDocumentRequest$Outbound = {
  brain_id: string;
  RequestBody?: CreateTextDocumentRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateTextDocumentRequest$outboundSchema: z.ZodType<
  CreateTextDocumentRequest$Outbound,
  z.ZodTypeDef,
  CreateTextDocumentRequest
> = z.object({
  brainId: z.string(),
  requestBody: z.lazy(() => CreateTextDocumentRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    brainId: "brain_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTextDocumentRequest$ {
  /** @deprecated use `CreateTextDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTextDocumentRequest$inboundSchema;
  /** @deprecated use `CreateTextDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTextDocumentRequest$outboundSchema;
  /** @deprecated use `CreateTextDocumentRequest$Outbound` instead. */
  export type Outbound = CreateTextDocumentRequest$Outbound;
}
