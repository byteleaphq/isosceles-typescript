/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentCreateDocumentReview } from "../funcs/documentCreateDocumentReview.js";
import { documentDeleteDocument } from "../funcs/documentDeleteDocument.js";
import { documentDownloadDocument } from "../funcs/documentDownloadDocument.js";
import { documentGetDocument } from "../funcs/documentGetDocument.js";
import { documentListDocumentReviews } from "../funcs/documentListDocumentReviews.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Document extends ClientSDK {
  /**
   * Download
   */
  async downloadDocument(
    request: operations.DownloadDocumentRequest,
    options?: RequestOptions,
  ): Promise<operations.DownloadDocumentResponseBody> {
    return unwrapAsync(documentDownloadDocument(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Document
   */
  async getDocument(
    request: operations.GetDocumentRequest,
    options?: RequestOptions,
  ): Promise<components.Document> {
    return unwrapAsync(documentGetDocument(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Document
   */
  async deleteDocument(
    request: operations.DeleteDocumentRequest,
    options?: RequestOptions,
  ): Promise<components.DeleteResponse> {
    return unwrapAsync(documentDeleteDocument(
      this,
      request,
      options,
    ));
  }

  /**
   * Create document review
   *
   * @remarks
   * Create a new document review
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createDocumentReview(
    request?: operations.CreateDocumentReviewRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.DocumentReview> {
    return unwrapAsync(documentCreateDocumentReview(
      this,
      request,
      options,
    ));
  }

  /**
   * List document reviews
   *
   * @remarks
   * Retrieve a list of document reviews
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listDocumentReviews(
    request: operations.ListDocumentReviewsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.DocumentReviewDetail>> {
    return unwrapAsync(documentListDocumentReviews(
      this,
      request,
      options,
    ));
  }
}
