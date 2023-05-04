        let theMap = new Map([

            ['my name is', 'Daniyar'],
            ['im from', 'Almaty'],
            ['I\'m taking a course', 'Frontend-разработчик']

        ]);

        for (let [keys, value] of theMap.entries()) {
            console.log('Ключ -', keys ,' ,  Значение -', value);
        }    