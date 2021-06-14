# What's the output of the following program?

class Animal
    def self.speak
        puts "Moo"
    end

    def speak
        puts "Meow"
    end

end

Animal.new.speak

Animal.speak
    