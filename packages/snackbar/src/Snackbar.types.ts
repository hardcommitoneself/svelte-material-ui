import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Snackbar.svelte';

export declare class SnackbarComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLElement>>,
    | 'use'
    | 'class'
    | 'variant'
    | 'leading'
    | 'timeoutMs'
    | 'closeOnEscape'
    | 'labelText'
    | 'actionButtonText'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `surface\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
