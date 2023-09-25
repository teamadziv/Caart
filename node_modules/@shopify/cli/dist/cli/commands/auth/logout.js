import Command from '@shopify/cli-kit/node/base-command';
import { outputSuccess } from '@shopify/cli-kit/node/output';
import { logout } from '@shopify/cli-kit/node/session';
class Logout extends Command {
    async run() {
        await logout();
        outputSuccess('Logged out from Shopify');
    }
}
Logout.description = 'Logout from Shopify.';
export default Logout;
//# sourceMappingURL=logout.js.map