class Api::V1::User::Base < ApplicationController
  private def current_user
    if session[:user_id]
      @current_user ||=
        User.find_by(id: session[:user_id])
    end
  end
end
