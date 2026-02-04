"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Github,
    Mail,
    Linkedin,
    Twitter,
    Laptop,
    Rocket,
    Trophy
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <div
                className="fixed bottom-4 right-4 z-50 p-2 bg-secondary/80 backdrop-blur-md rounded-lg border border-border shadow-lg cursor-pointer hover:bg-secondary transition-colors hidden md:flex items-center gap-2 text-xs text-muted-foreground"
                onClick={() => setOpen(true)}
            >
                <span className="font-mono">⌘K</span>
                <span>Command Menu</span>
            </div>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navigation">
                        <CommandItem onSelect={() => {
                            document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
                            setOpen(false)
                        }}>
                            <User className="mr-2 h-4 w-4" />
                            <span>Who I Am</span>
                        </CommandItem>
                        <CommandItem onSelect={() => {
                            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                            setOpen(false)
                        }}>
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>Experience</span>
                        </CommandItem>
                        <CommandItem onSelect={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            setOpen(false)
                        }}>
                            <Rocket className="mr-2 h-4 w-4" />
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem onSelect={() => {
                            document.getElementById('hall-of-fame')?.scrollIntoView({ behavior: 'smooth' })
                            setOpen(false)
                        }}>
                            <Trophy className="mr-2 h-4 w-4" />
                            <span>Awards</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Connect">
                        <CommandItem onSelect={() => window.open('https://github.com/captainaraf', '_blank')}>
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </CommandItem>
                        <CommandItem onSelect={() => window.open('https://linkedin.com/in/shaidozzamanaraf', '_blank')}>
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </CommandItem>
                        <CommandItem onSelect={() => window.open('mailto:shaidozzamanaraf21@gmail.com', '_blank')}>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email Me</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
