Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :product do
    collection do
      get 'catalog'
    end
  end

  resources :article
  resources :home
  resources :company do
    get 'notices', on: :collection
    get 'news', on: :collection
  end
  resources :about do
    get 'innovations', on: :collection
    get 'qualifications', on: :collection
    get 'profile', on: :collection
  end
  resources :contact do
    get 'tel', on: :collection
  end
  # Defines the root path route ("/")
  root "home#index"
end
