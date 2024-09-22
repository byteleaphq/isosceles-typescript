/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateDocumentWithUrlRequestBody = {
  /**
   * Url of the website that you want to add
   */
  url?: string | undefined;
};

export type CreateDocumentWithUrlRequest = {
  brainId: string;
  requestBody?: CreateDocumentWithUrlRequestBody | undefined;
};

/** @internal */
export const CreateDocumentWithUrlRequestBody$inboundSchema: z.ZodType<
  CreateDocumentWithUrlRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
});

/** @internal */
export type CreateDocumentWithUrlRequestBody$Outbound = {
  url?: string | undefined;
};

/** @internal */
export const CreateDocumentWithUrlRequestBody$outboundSchema: z.ZodType<
  CreateDocumentWithUrlRequestBody$Outbound,
  z.ZodTypeDef,
  CreateDocumentWithUrlRequestBody
> = z.object({
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentWithUrlRequestBody$ {
  /** @deprecated use `CreateDocumentWithUrlRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentWithUrlRequestBody$inboundSchema;
  /** @deprecated use `CreateDocumentWithUrlRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentWithUrlRequestBody$outboundSchema;
  /** @deprecated use `CreateDocumentWithUrlRequestBody$Outbound` instead. */
  export type Outbound = CreateDocumentWithUrlRequestBody$Outbound;
}

/** @internal */
export const CreateDocumentWithUrlRequest$inboundSchema: z.ZodType<
  CreateDocumentWithUrlRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  brain_id: z.string(),
  RequestBody: z.lazy(() => CreateDocumentWithUrlRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateDocumentWithUrlRequest$Outbound = {
  brain_id: string;
  RequestBody?: CreateDocumentWithUrlRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateDocumentWithUrlRequest$outboundSchema: z.ZodType<
  CreateDocumentWithUrlRequest$Outbound,
  z.ZodTypeDef,
  CreateDocumentWithUrlRequest
> = z.object({
  brainId: z.string(),
  requestBody: z.lazy(() => CreateDocumentWithUrlRequestBody$outboundSchema)
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
export namespace CreateDocumentWithUrlRequest$ {
  /** @deprecated use `CreateDocumentWithUrlRequest$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentWithUrlRequest$inboundSchema;
  /** @deprecated use `CreateDocumentWithUrlRequest$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentWithUrlRequest$outboundSchema;
  /** @deprecated use `CreateDocumentWithUrlRequest$Outbound` instead. */
  export type Outbound = CreateDocumentWithUrlRequest$Outbound;
}