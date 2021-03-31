require 'minitest/autorun'
require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def test_accept_money
    transaction = Transaction.new(10)
    register = CashRegister.new(50)
    transaction.amount_paid = 10

    previous_amount = register.total_money
    register.accept_money(transaction)
    current_amount = register.total_money

    assert_equal(previous_amount + 10, current_amount)
  end

  def test_change
    transaction = Transaction.new(10)
    register = CashRegister.new(50)
    transaction.amount_paid = 20

    assert_equal(10, register.change(transaction))
  end

  def test_give_receipt
    transaction = Transaction.new(10)
    register = CashRegister.new(50)

    assert_output("You've paid $10.\n") do
      register.give_receipt(transaction)
    end
  end
end
