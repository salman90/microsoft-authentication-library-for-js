/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { AccountInfo } from "../account/AccountInfo";

/**
 * EndSessionRequest
 * - account                - Account object that will be logged out of. All tokens tied to this account will be cleared.
 * - postLogoutRedirectUri  - URI to navigate to after logout page.
 * - correlationId          - Unique GUID set per request to trace a request end-to-end for telemetry purposes.
 */
export type EndSessionRequest = {
    correlationId: string
    account?: AccountInfo,
    postLogoutRedirectUri?: string,
};
