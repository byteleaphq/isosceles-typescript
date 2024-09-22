/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SendChatMessageRequestBody = {
  /**
   * Id of chat to which you want to send message
   */
  chatThreadId?: string | undefined;
  /**
   * message
   */
  text?: string | undefined;
};

/** @internal */
export const SendChatMessageRequestBody$inboundSchema: z.ZodType<
  SendChatMessageRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  chat_thread_id: z.string().optional(),
  text: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "chat_thread_id": "chatThreadId",
  });
});

/** @internal */
export type SendChatMessageRequestBody$Outbound = {
  chat_thread_id?: string | undefined;
  text?: string | undefined;
};

/** @internal */
export const SendChatMessageRequestBody$outboundSchema: z.ZodType<
  SendChatMessageRequestBody$Outbound,
  z.ZodTypeDef,
  SendChatMessageRequestBody
> = z.object({
  chatThreadId: z.string().optional(),
  text: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    chatThreadId: "chat_thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendChatMessageRequestBody$ {
  /** @deprecated use `SendChatMessageRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendChatMessageRequestBody$inboundSchema;
  /** @deprecated use `SendChatMessageRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendChatMessageRequestBody$outboundSchema;
  /** @deprecated use `SendChatMessageRequestBody$Outbound` instead. */
  export type Outbound = SendChatMessageRequestBody$Outbound;
}
