/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PostIntegrationIntegrationNameConnectRequest = {
  /**
   * Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.
   */
  integrationName: string;
};

export type PostIntegrationIntegrationNameConnectResponseBody = {
  /**
   * URL to connect to the integration
   */
  url?: string | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameConnectRequest$inboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameConnectRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    integration_name: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "integration_name": "integrationName",
    });
  });

/** @internal */
export type PostIntegrationIntegrationNameConnectRequest$Outbound = {
  integration_name: string;
};

/** @internal */
export const PostIntegrationIntegrationNameConnectRequest$outboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameConnectRequest$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameConnectRequest
  > = z.object({
    integrationName: z.string(),
  }).transform((v) => {
    return remap$(v, {
      integrationName: "integration_name",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameConnectRequest$ {
  /** @deprecated use `PostIntegrationIntegrationNameConnectRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostIntegrationIntegrationNameConnectRequest$inboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameConnectRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostIntegrationIntegrationNameConnectRequest$outboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameConnectRequest$Outbound` instead. */
  export type Outbound = PostIntegrationIntegrationNameConnectRequest$Outbound;
}

/** @internal */
export const PostIntegrationIntegrationNameConnectResponseBody$inboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameConnectResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    url: z.string().optional(),
  });

/** @internal */
export type PostIntegrationIntegrationNameConnectResponseBody$Outbound = {
  url?: string | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameConnectResponseBody$outboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameConnectResponseBody$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameConnectResponseBody
  > = z.object({
    url: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameConnectResponseBody$ {
  /** @deprecated use `PostIntegrationIntegrationNameConnectResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostIntegrationIntegrationNameConnectResponseBody$inboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameConnectResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostIntegrationIntegrationNameConnectResponseBody$outboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameConnectResponseBody$Outbound` instead. */
  export type Outbound =
    PostIntegrationIntegrationNameConnectResponseBody$Outbound;
}