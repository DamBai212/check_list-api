class CheckListsController < ApplicationController
  def index
    check_lists = CheckList.order("created_at DESC")
    render json: check_lists
  end

  def create
    check_list = CheckList.create(check_list_param)
    render json: check_list
  end

  def update
    check_list = CheckList.find(params[:id])
    check_list.update_attributes(check_list_param)
    render json: check_list
  end

  def destroy
    check_list = CheckList.find(params[:id])
    check_list.destroy
    check_lists = CheckList.order("created_at DESC")
    render json: check_lists
  end

  private
   def check_list_param
    params.require(:check_list).permit(:title, :done)
   end
end
