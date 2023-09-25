import { autocorrectStatus } from '../../../services/constants.js';
import { setAutocorrect } from '../../../services/conf.js';
import Command from '@shopify/cli-kit/node/base-command';
import { renderInfo } from '@shopify/cli-kit/node/ui';
class AutocorrectOff extends Command {
    async run() {
        setAutocorrect(false);
        renderInfo({ body: autocorrectStatus.off });
    }
}
AutocorrectOff.description = 'Disable autocorrect.';
export default AutocorrectOff;
//# sourceMappingURL=off.js.map