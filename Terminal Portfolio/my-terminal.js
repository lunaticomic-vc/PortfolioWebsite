$(document).ready(function() {
    figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
    figlet.preloadFonts(['Slant'], function() {
        const commands = {
            greet: function(name) {
                if (name) {
                    this.echo(`Hello, ${name}! How are you today?`);
                } else {
                    this.push(function(name) {
                        if (name.trim() === '') {
                            this.echo('Please enter your name:');
                        } else {
                            this.echo(`Hello, ${name}! How are you today?`);
                            this.pop();
                        }
                    }, {
                        prompt: 'Name> '
                    });
                }
            },
            about: function() {
                this.echo('Press Enter to continue...');
                this.push(function(command) 
                {
                    if (command === '') {
                        this.echo('This is the about section of the portfolio.');
                        window.close();
                        window.open('about.html', '_blank');
                        this.pop();
                    }
                }, {
                    prompt: 'Press Enter> '
                });
            },
        };

        const handleCommand = function(command, term) {
            const parts = command.split(" ");
            const cmd = parts[0];
            const args = parts.slice(1).join(" ");

            if (commands.hasOwnProperty(cmd)) {
                commands[cmd].apply(term, [args]);
            } else {
                try {
                    const result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(new String(result));
                    }
                } catch (e) {
                    term.error(new String(e));
                }
            }
        };

        $('body').terminal(handleCommand, {
            greetings: figlet.textSync('Welcome!', { font: 'Slant' }),
            name: 'js_demo',
            height: 700,
            prompt: 'js> ',
            onInit: function(term) {
                term.echo('Type "greet [your name]", "about" to learn more, or JavaScript commands to execute.');
            }
        });
    });
});
