import { demo } from '../../services/demo.js';
import Command from '@shopify/cli-kit/node/base-command';
import { readFile } from '@shopify/cli-kit/node/fs';
import { joinPath } from '@shopify/cli-kit/node/path';
import { outputInfo } from '@shopify/cli-kit/node/output';
import { renderAutocompletePrompt } from '@shopify/cli-kit/node/ui';
import { fileURLToPath } from 'url';
class Catalog extends Command {
    async run() {
        const catalogFile = joinPath(fileURLToPath(import.meta.url), '../../../../../assets/demo-catalog.json');
        const { steps } = JSON.parse(await readFile(catalogFile));
        const stepSelection = await renderAutocompletePrompt({
            message: 'Step to display',
            choices: steps.map(({ title, type }) => {
                return {
                    label: title,
                    value: title,
                    group: type,
                };
            }),
        });
        const selectedStep = steps.find(({ title }) => title === stepSelection);
        outputInfo('The step looks like this:');
        await demo({ steps: [selectedStep] });
        outputInfo('JSON for this step:');
        outputInfo(JSON.stringify(selectedStep, null, 2));
    }
}
Catalog.description = 'Browse the catalog for steps';
Catalog.hidden = true;
export default Catalog;
//# sourceMappingURL=catalog.js.map