@component('mail::message')

[{{ $invite->sender->email }}](mailto:{{ $invite->sender->email }}) has invited you to collaborate with them on their project in CollectContent

@component('mail::button', ['url' => route('acceptInvite', [$invite->uuid, $invite->token])])
Accept Invite
@endcomponent

@if (!empty($invite->message))
@component('mail::panel')
{{ $invite->message }}
@endcomponent
@endif

New to CollectContent? With CollectContent, we make it easy for you to collect and organize content for your website projects.

[Learn more](https://www.collectcontent.io/)

@endcomponent
