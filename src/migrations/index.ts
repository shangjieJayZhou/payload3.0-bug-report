import * as migration_20241103_050131_add_new_collections_items_and_itemBlock from './20241103_050131_add_new_collections_items_and_itemBlock';
import * as migration_20241103_075334_add_direct_relation from './20241103_075334_add_direct_relation';

export const migrations = [
  {
    up: migration_20241103_050131_add_new_collections_items_and_itemBlock.up,
    down: migration_20241103_050131_add_new_collections_items_and_itemBlock.down,
    name: '20241103_050131_add_new_collections_items_and_itemBlock',
  },
  {
    up: migration_20241103_075334_add_direct_relation.up,
    down: migration_20241103_075334_add_direct_relation.down,
    name: '20241103_075334_add_direct_relation'
  },
];
