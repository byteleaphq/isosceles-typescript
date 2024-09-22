/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Document = {
  /**
   * A unique identifier for the “brain” associated with this document or data object
   */
  brainId: string;
  /**
   * The number of chunks the document or file has been split into, often for easier processing or handling.
   */
  chunks: number;
  /**
   * The timestamp indicating when the document or file was created
   */
  createdAt: string;
  /**
   * A unique identifier for the document associated with this object
   */
  documentId: string;
  /**
   * An internal ID for this object
   */
  id: number;
  /**
   * The name of the file or document
   */
  name: string;
  /**
   * The current status of the document processing.
   */
  status: string;
  /**
   * The type of the document or file
   */
  type: string;
  /**
   * A URL link to access or download the file. This is likely a temporary signed URL from AWS S3, as it includes authentication details and an expiration timestamp
   */
  url: string;
};

/** @internal */
export const Document$inboundSchema: z.ZodType<
  Document,
  z.ZodTypeDef,
  unknown
> = z.object({
  brain_id: z.string(),
  chunks: z.number().int(),
  created_at: z.string(),
  document_id: z.string(),
  id: z.number().int(),
  name: z.string(),
  status: z.string(),
  type: z.string(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
    "created_at": "createdAt",
    "document_id": "documentId",
  });
});

/** @internal */
export type Document$Outbound = {
  brain_id: string;
  chunks: number;
  created_at: string;
  document_id: string;
  id: number;
  name: string;
  status: string;
  type: string;
  url: string;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<
  Document$Outbound,
  z.ZodTypeDef,
  Document
> = z.object({
  brainId: z.string(),
  chunks: z.number().int(),
  createdAt: z.string(),
  documentId: z.string(),
  id: z.number().int(),
  name: z.string(),
  status: z.string(),
  type: z.string(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    brainId: "brain_id",
    createdAt: "created_at",
    documentId: "document_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
  /** @deprecated use `Document$inboundSchema` instead. */
  export const inboundSchema = Document$inboundSchema;
  /** @deprecated use `Document$outboundSchema` instead. */
  export const outboundSchema = Document$outboundSchema;
  /** @deprecated use `Document$Outbound` instead. */
  export type Outbound = Document$Outbound;
}