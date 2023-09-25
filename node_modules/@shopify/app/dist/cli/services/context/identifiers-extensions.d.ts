import { EnsureDeploymentIdsPresenceOptions, MatchingError, RemoteSource } from './identifiers.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
import { Result } from '@shopify/cli-kit/node/result';
interface AppWithExtensions {
    extensionRegistrations: RemoteSource[];
    dashboardManagedExtensionRegistrations: RemoteSource[];
}
export declare function ensureExtensionsIds(options: EnsureDeploymentIdsPresenceOptions, { extensionRegistrations: initialRemoteExtensions, dashboardManagedExtensionRegistrations: dashboardOnlyExtensions, }: AppWithExtensions): Promise<Result<{
    extensions: IdentifiersExtensions;
    extensionIds: IdentifiersExtensions;
}, MatchingError>>;
export {};
