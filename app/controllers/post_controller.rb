class PostController < ApplicationController
  def create
    @post = Post.create(author_name: params[:author_name], text: params[:text])
    redirect_to '/'
  end

  def destroy
    render json: Post.destroy(params[:id])
  end
end
