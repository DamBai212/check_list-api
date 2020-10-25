class CreateCheckLists < ActiveRecord::Migration[6.0]
  def change
    create_table :check_lists do |t|
      t.string :title
      t.boolean :done

      t.timestamps
    end
  end
end
