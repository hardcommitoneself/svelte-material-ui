import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './DataTable.svelte';

export declare class DataTableComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'stickyHeader'
    | 'sortable'
    | 'sort'
    | 'sortDirection'
    | 'sortAscendingAriaLabel'
    | 'sortDescendingAriaLabel'
  > & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    > as `container\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLDivElement>
    >[k];
  } & {
    [k in keyof Partial<
      svelte.JSX.HTMLAttributes<HTMLTableElement>
    > as `table\$${k}`]?: Partial<
      svelte.JSX.HTMLAttributes<HTMLTableElement>
    >[k];
  } & ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}

export { SortValue } from '@material/data-table';
