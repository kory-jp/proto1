class Api::V1::User::SessionsController < Api::V1::User::Base
  # def new
  #   if current_user
  #     render json: {status: :ok, message: "Logged In"}
  #   else
  #     @form = User::LoginForm.new
  #     render json: {status: :ok, message: "Login", data: @current_user}
  #   end
  # end

  def create 
    
  end

  private
  def login_form_params
    params.require(:user_login_form).permit(:email, :password)
  end
end
