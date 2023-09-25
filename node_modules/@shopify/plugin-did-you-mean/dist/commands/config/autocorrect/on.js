import { autocorrectStatus } from '../../../services/constants.js';
import { setAutocorrect } from '../../../services/conf.js';
import Command from '@shopify/cli-kit/node/base-command';
import { renderInfo } from '@shopify/cli-kit/node/ui';
class AutocorrectOn extends Command {
    async run() {
        setAutocorrect(true);
        renderInfo({ body: autocorrectStatus.on });
    }
}
AutocorrectOn.description = 'Enable autocorrect.';
export default AutocorrectOn;
//# sourceMappingURL=on.js.map