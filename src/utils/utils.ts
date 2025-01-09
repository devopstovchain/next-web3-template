import { BaseError } from 'viem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function readErrorTransaction(err: any): { text: string; type: 'shortMess' | 'metaMess' | 'unknow' }[] {
  const mess: { text: string; type: 'shortMess' | 'metaMess' | 'unknow' }[] = [];
  if ((err as BaseError).shortMessage) {
    mess.push({ text: err.shortMessage, type: 'shortMess' });
  }
  const metaMess = (err as BaseError).metaMessages;
  if (metaMess) {
    mess.push(
      ...metaMess.map(
        item => ({ text: item, type: 'metaMess' } as { text: string; type: 'shortMess' | 'metaMess' | 'unknow' }),
      ),
    );
  }
  if (mess.length > 0) {
    return mess;
  }

  return [{ text: (err as Error).message, type: 'unknow' }];
}
