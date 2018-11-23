export const pioneerLogsIndices = [
  'pioneer-logs-error',
  'pioneer-logs-usage',
  'pioneer-logs-performance',
  'pioneer-logs-diagnostic'
];

export class Index {
  health: string;
  status: string;
  index: string;
  uuid: string;
  pri: string;
  rep: string;
  'docs.count': string;
  'docs.deleted': string;
  'store.size': string;
  'pri.store.size': string;
}
