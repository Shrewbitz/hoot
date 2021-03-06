Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:create, :show, :index] do 
        resources :reviews, only: [:create, :index, :destroy]
    end
    get '/restaurants/search/:search', to: 'restaurants#search'
  end
end
