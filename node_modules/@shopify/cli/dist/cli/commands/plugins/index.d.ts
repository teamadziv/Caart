import Command from '@shopify/cli-kit/node/base-command';
export default class Index extends Command {
    static hidden: boolean;
    run(): Promise<void>;
}
