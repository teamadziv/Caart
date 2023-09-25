export interface ExtensionRegistration {
    id: string;
    uuid: string;
    type: string;
    title: string;
    draftVersion?: {
        config: string;
        registrationId: string;
        lastUserInteractionAt: string;
        validationErrors: {
            field: string[];
            message: string;
        }[];
    };
}
export declare function createExtension(apiKey: string, graphQLType: string, name: string, token: string): Promise<ExtensionRegistration>;
