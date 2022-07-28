---
title: "Rails CURD"
date: 2022-07-28T03:08:08+08:00
---

# Product manage
   Validations and Displaying Error Messages    
add "./app/models/product.rb":
```
  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 10 }
```

add "./app/views/product/new.html.erb" and "./app/views/product/_form.html.erb":    
- field name    
```
    <% @product.errors.full_messages_for(:name).each do |message| %>
      <div><%= message %></div>
    <% end %>
```
- field description    
```
    <% @product.errors.full_messages_for(:description).each do |message| %>
      <div><%= message %></div>
    <% end %>
```


## Creating a New Product
add "./app/views/product/index.html.erb":
```
<%= link_to "New Product", new_product_path %>
```

### Controller
add "./app/controllers/product_controller.rb":
```
  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to @product
    else
      render :new, status: :unprocessable_entity
    end
  end
  
  private
    def product_params
      params.require(:product).permit(:param_id, :statu_id, :lang_id, :img_id, :name, :description)
    end
```

### Using a Form Builder
注意： 需要增加url    

create "./app/views/product/new.html.erb":
```
<h1>New Product</h1>

<%= form_with url:"/product", model: @product do |form| %>
  <div>
    <%= form.label :name %><br>
    <%= form.text_field :name %>
  </div>

  <div>
    <%= form.label :description %><br>
    <%= form.text_area :description %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>
```


## Updating an Product
add "./app/controllers/product_controller.rb":
```
  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])

    if @product.update(product_params)
      redirect_to @product
    else
      render :edit, status: :unprocessable_entity
    end
  end
```

### view
- base view    
create "./app/views/product/edit.html.erb":
```
<h1>Edit Product</h1>

<%= render "form", product: @product %>
```

- Using Partials to Share View Code    
> 注意： 需要使用path增加url

create "./app/views/product/_form.html.erb":
```
<%= form_with url:product_path, model: product do |form| %>
  <div>
    <%= form.label :param_id %><br>
    <%= form.text_field :param_id %>
  </div>

  <div>
    <%= form.label :statu_id %><br>
    <%= form.text_field :statu_id %>
  </div>

  <div>
    <%= form.label :lang_id %><br>
    <%= form.text_field :lang_id %>
  </div>

  <div>
    <%= form.label :img_id %><br>
    <%= form.text_field :img_id %>
  </div>

  <div>
    <%= form.label :name %><br>
    <%= form.text_field :name %>
    <% product.errors.full_messages_for(:name).each do |message| %>
      <div><%= message %></div>
    <% end %>
  </div>

  <div>
    <%= form.label :description %><br>
    <%= form.text_area :description %><br>
    <% product.errors.full_messages_for(:description).each do |message| %>
      <div><%= message %></div>
    <% end %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>

```

## Deleting an Product
add "./app/controllers/product_controller.rb":
```
  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to root_path, status: :see_other
  end
```

### view
add "./app/views/show.html.erb":
```
<ul>
  <li><%= link_to "Edit", edit_product_path(@product) %></li>
  <li><%= link_to "Destroy", product_path(@product), data: {
                    turbo_method: :delete,
                    turbo_confirm: "Are you sure?"
                  } %>
  </li>
  <li>
    <%= link_to "Back Home", product_index_path %>
  </li>
</ul>
```

# Ref
- [Getting Started with Rails](https://guides.rubyonrails.org/v7.0/getting_started.html)
