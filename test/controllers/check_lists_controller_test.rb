require 'test_helper'

class CheckListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get check_lists_index_url
    assert_response :success
  end

  test "should get create" do
    get check_lists_create_url
    assert_response :success
  end

  test "should get update" do
    get check_lists_update_url
    assert_response :success
  end

  test "should get destory" do
    get check_lists_destory_url
    assert_response :success
  end

end
