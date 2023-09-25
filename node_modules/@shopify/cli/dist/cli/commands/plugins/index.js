import PluginsIndex from '@oclif/plugin-plugins/lib/commands/plugins/index.js';
import Command from '@shopify/cli-kit/node/base-command';
class Index extends Command {
    async run() {
        await PluginsIndex.default.run(this.argv);
    }
}
Index.hidden = true;
export default Index;
//# sourceMappingURL=index.js.map