import {JSDOM, ReconfigureSettings} from 'jsdom';

export function reconfigureJsdom(reconfigureSettings: ReconfigureSettings): void {
  const jsdom: JSDOM = (global as any).jsdom;
  jsdom.reconfigure(reconfigureSettings)
}
