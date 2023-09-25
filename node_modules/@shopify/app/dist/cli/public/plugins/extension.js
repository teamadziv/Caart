export { createExtensionSpecification, } from '../../models/extensions/specification.js';
export { fetchProductVariant } from '../../utilities/extensions/fetch-product-variant.js';
export { loadLocalesConfig } from '../../utilities/extensions/locales-configuration.js';
export * from '../../models/extensions/schemas.js';
/**
 * A function for plugins to register new UI extension types.
 *
 * @param specifications - The UI extension specifications to register.
 * @returns A function that returns the list of specifications.
 * @example
 */
export const registerUIExtensionSpecifications = (specifications) => {
    return async () => specifications;
};
//# sourceMappingURL=extension.js.map