/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UploadDocumentBrainResponseBodyData = {
  error?: string | undefined;
};

export class UploadDocumentBrainResponseBody extends Error {
  error?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UploadDocumentBrainResponseBodyData;

  constructor(err: UploadDocumentBrainResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.error != null) this.error = err.error;

    this.name = "UploadDocumentBrainResponseBody";
  }
}

export type UploadDocumentResponseBodyData = {
  error?: string | undefined;
};

export class UploadDocumentResponseBody extends Error {
  error?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UploadDocumentResponseBodyData;

  constructor(err: UploadDocumentResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.error != null) this.error = err.error;

    this.name = "UploadDocumentResponseBody";
  }
}

/** @internal */
export const UploadDocumentBrainResponseBody$inboundSchema: z.ZodType<
  UploadDocumentBrainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string().optional(),
})
  .transform((v) => {
    return new UploadDocumentBrainResponseBody(v);
  });

/** @internal */
export type UploadDocumentBrainResponseBody$Outbound = {
  error?: string | undefined;
};

/** @internal */
export const UploadDocumentBrainResponseBody$outboundSchema: z.ZodType<
  UploadDocumentBrainResponseBody$Outbound,
  z.ZodTypeDef,
  UploadDocumentBrainResponseBody
> = z.instanceof(UploadDocumentBrainResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDocumentBrainResponseBody$ {
  /** @deprecated use `UploadDocumentBrainResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadDocumentBrainResponseBody$inboundSchema;
  /** @deprecated use `UploadDocumentBrainResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadDocumentBrainResponseBody$outboundSchema;
  /** @deprecated use `UploadDocumentBrainResponseBody$Outbound` instead. */
  export type Outbound = UploadDocumentBrainResponseBody$Outbound;
}

/** @internal */
export const UploadDocumentResponseBody$inboundSchema: z.ZodType<
  UploadDocumentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string().optional(),
})
  .transform((v) => {
    return new UploadDocumentResponseBody(v);
  });

/** @internal */
export type UploadDocumentResponseBody$Outbound = {
  error?: string | undefined;
};

/** @internal */
export const UploadDocumentResponseBody$outboundSchema: z.ZodType<
  UploadDocumentResponseBody$Outbound,
  z.ZodTypeDef,
  UploadDocumentResponseBody
> = z.instanceof(UploadDocumentResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadDocumentResponseBody$ {
  /** @deprecated use `UploadDocumentResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadDocumentResponseBody$inboundSchema;
  /** @deprecated use `UploadDocumentResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadDocumentResponseBody$outboundSchema;
  /** @deprecated use `UploadDocumentResponseBody$Outbound` instead. */
  export type Outbound = UploadDocumentResponseBody$Outbound;
}