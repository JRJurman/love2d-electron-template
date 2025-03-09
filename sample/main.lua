function love.load()
	love.window.setTitle('Electron Sample')
	count = 5
end

function love.draw()
	local spacing = 50
	local size = 20
	local cols = 10
	local xStart = 50
	local yStart = 50

	for i = 0, count - 1 do
		local x = xStart + (i % cols) * spacing
		local y = yStart + math.floor(i / cols) * spacing
		love.graphics.circle("fill", x, y, size)
	end
end

function love.keypressed(key)
	if key == "up" then
		count = math.min(count + 1, 99)
	elseif key == "down" then
		count = math.max(count - 1, 0)
	end
end
