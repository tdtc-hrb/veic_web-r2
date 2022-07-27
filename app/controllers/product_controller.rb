class ProductController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def catalog
    @product = Product.find_by(name: params[:name], lang_id: params[:lang])
    @parameter = Parameter.find(@product.param_id)
    @image = Image.find(@product.img_id)
  end
end
