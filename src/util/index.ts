import { Readable } from "stream";
import { FileMetaData, SdkResponse, SdkResponseError } from "connect-sdk-nodejs/lib/model";
import { FileData } from "../model";

export function handleSdkResponse<T>(
  error: SdkResponseError | null,
  response: SdkResponse | null,
  resolve: (value: T | PromiseLike<T>) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (reason?: any) => void
): void {
  if (response?.isSuccess) {
    resolve(response.body as T);
  } else if (response) {
    reject(response);
  } else {
    reject(error);
  }
}

export function handleBinarySdkResponse(
  error: SdkResponseError | null,
  response: SdkResponse | null,
  resolve: (value: FileData | PromiseLike<FileData>) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (reason?: any) => void
): void {
  if (response?.isSuccess) {
    const metaData = response.file ?? ({} as FileMetaData);
    resolve({
      content: response.body as Readable,
      contentType: metaData.contentType,
      contentLength: metaData.contentLength,
      filename: metaData.filename,
    });
  } else if (response) {
    reject(response);
  } else {
    reject(error);
  }
}
