import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class addForeignkeyUsersToOrphanage1602847695291
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orphanages',
      new TableColumn({
        name: 'user_id',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'orphanages',
      new TableForeignKey({
        name: 'OrphanageUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orphanages', 'OrphanageUser');
    await queryRunner.dropColumn('orphanages', 'user_id');
  }
}
