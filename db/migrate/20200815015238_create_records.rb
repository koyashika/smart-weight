class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :text
      t.text :image
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
