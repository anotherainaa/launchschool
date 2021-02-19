# Problem:
# Alyssa must log all access to `data`
# the logging class is the one specified below it

class SecretFile
  attr_reader :logger

  def initialize(secret_data, logger)
    @logger = logger
    @data = secret_data
  end

  def data
    @logger.create_log_entry
    @data 
  end
end

class SecurityLogger
  def initialize
    @logs = []
  end

  def create_log_entry
    # ... implementation omitted ...
    # putting a simple code to test here
    @logs << "log entry"
  end
end

logger = SecurityLogger.new
secret = SecretFile.new("secret", logger)
p secret.data
p secret.logger