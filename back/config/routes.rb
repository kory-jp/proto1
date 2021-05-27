Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :user do
        root "top#index"
        get "login" => "sessions#new", as: :login
        post "session" => "sessions#create", as: :session
        delete "session" => "sessions#destroy"
      end

      namespace :admin do
        root"top#index"
      end
    end
  end
end
