<script lang="ts">
	import './landing.css';

	let requestMessage = $state('');
	let requestNote = $state('Opens your email app with the request filled in.');

	function handleRequestSubmit(event: SubmitEvent) {
		event.preventDefault();
		const message = requestMessage.trim();

		if (!message) {
			requestNote = 'Write a short request first.';
			return;
		}

		const subject = encodeURIComponent('Ubicode feature request');
		const body = encodeURIComponent(`${message}\n\nSent from the Ubicode landing page.`);
		window.location.href = `mailto:feedback@ubicode.ai?subject=${subject}&body=${body}`;
		requestNote = 'Opening your email app...';
	}
</script>

<svelte:head>
	<title>Ubicode | SSH Workspace for iPhone</title>
	<meta
		name="description"
		content="Ubicode - Editor and terminal over SSH on iPhone. Edit code, review Markdown, and command AI agents away from your desk."
	/>
</svelte:head>
<div class="screen-noise" aria-hidden="true"></div>
    <div class="glow glow-purple" aria-hidden="true"></div>
    <div class="glow glow-green" aria-hidden="true"></div>

    <header class="site-header">
      <nav class="console-nav container" aria-label="Main navigation">
        <a class="terminal-brand" href="/" aria-label="Ubicode home">
          <pre class="brand-mascot" aria-hidden="true">(\  /)
( •.• )
c(")(")</pre>
          <span class="brand-name">ubicode</span>
        </a>
        <div class="nav-command">
          <span class="nav-prompt">user@ubicode:~$</span>
          <a href="#features">features</a>
          <a href="#beta">start</a>
        </div>
        <a class="terminal-button small" href="https://testflight.apple.com/join/4tsnW6vw"><span>./</span> start</a>
      </nav>
    </header>

    <main class="container">
      <section class="hero-console console-frame reveal">
        <div class="console-bar">
          <div class="traffic" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>

        <div class="hero-grid">
          <div class="boot-pane">
            <div class="ascii-lockup" aria-label="UBICODE with mascot">
              <pre class="ascii-logo">
██╗   ██╗██████╗ ██╗ ██████╗ ██████╗ ██████╗ ███████╗
██║   ██║██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██████╔╝██║██║     ██║   ██║██║  ██║█████╗
██║   ██║██╔══██╗██║██║     ██║   ██║██║  ██║██╔══╝
╚██████╔╝██████╔╝██║╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝</pre>
              <pre class="ascii-mascot">(\  /)
( •.• )
c(")(")</pre>
            </div>
            <p class="hero-tagline">
              Editor and Terminal<br />
              <span>over SSH on iPhone</span>
            </p>

            <div class="conversion-block">
              <div class="readme-log">
                <p class="command"><span>user@ubicode:~$</span> cat README.md</p>
                <p class="output">
                  Edit code, review Markdown, and command AI agents while away from your desk.
                </p>
              </div>
              <div class="hero-actions" aria-label="Primary actions">
                <a class="terminal-button primary" href="https://testflight.apple.com/join/4tsnW6vw">Start Now on TestFlight</a>
              </div>
            </div>
          </div>

          <aside class="demo-pane" id="demo" aria-label="Ubicode iPhone demo video">
            <div class="phone-shell">
              <div class="phone-camera" aria-hidden="true"></div>
              <video
                class="demo-video"
                src="/assets/ubicode-demo.mp4"
                autoplay
                loop
                muted
                playsinline
                controls
                preload="metadata"
                aria-label="Ubicode mobile app demo"
              ></video>
            </div>
          </aside>
        </div>

      </section>

      <section class="features-console console-frame" id="features" aria-label="Ubicode features">
        <div class="section-command">
          <p class="command"><span>user@ubicode:~$</span> ubicode --list-features --verbose</p>
        </div>
        <div class="feature-list">
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">01</p></div>
              <h2><span>&#9670;</span> Quick Connect</h2>
              <p>Save and organize your servers. Connect with a single tap.</p>
              <p class="feature-command"><span>$</span> ubicode connect --saved</p>
            </div>
            <figure class="feature-shot crop-connect">
              <img src="/assets/feature-quick-connect.jpg" alt="Ubicode saved SSH connection screen" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">02</p></div>
              <h2><span>&#9670;</span> Terminal Emulator</h2>
              <p>Full-featured xterm terminal with true color, Unicode, and Sixel support.</p>
              <p class="feature-command"><span>$</span> img2sixel ubicode_logo.png</p>
            </div>
            <figure class="feature-shot">
              <img src="/assets/feature-terminal.jpg?v=20260527-video-terminal" alt="Ubicode terminal command running on iPhone" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">03</p></div>
              <h2><span>&#9670;</span> SFTP Browser</h2>
              <p>Browse, upload, and download files with a visual file manager.</p>
              <p class="feature-command"><span>$</span> sftp browse /home/reviewer/lua</p>
            </div>
            <figure class="feature-shot crop-sftp">
              <img src="/assets/feature-sftp.jpg" alt="Ubicode visual SFTP file browser" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">04</p></div>
              <h2><span>&#9670;</span> Built-in Text Editor</h2>
              <p>Edit remote files without leaving the app.</p>
              <p class="feature-command"><span>$</span> edit /home/reviewer/lua/lvm.c</p>
            </div>
            <figure class="feature-shot crop-editor">
              <img src="/assets/feature-editor.jpg" alt="Ubicode remote code editor" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">05</p></div>
              <h2><span>&#9670;</span> SSH Tunneling</h2>
              <p>Local and remote port forwarding made simple.</p>
              <p class="feature-command"><span>$</span> tunnel -L 8080:localhost:80</p>
            </div>
            <figure class="feature-shot crop-tunnel">
              <img src="/assets/feature-tunneling.jpg" alt="Ubicode SSH tunneling screen" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">06</p></div>
              <h2><span>&#9670;</span> Command Snippets</h2>
              <p>Save and reuse your most common commands.</p>
              <p class="feature-command"><span>$</span> snippets run "ls -la"</p>
            </div>
            <figure class="feature-shot crop-snippets">
              <img src="/assets/feature-snippets.jpg" alt="Ubicode command snippets screen" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">07</p></div>
              <h2><span>&#9670;</span> Customizable Key Panel</h2>
              <p>Tailor your keyboard shortcuts for efficiency.</p>
              <p class="feature-command"><span>$</span> keys add --modifier Ctrl</p>
            </div>
            <figure class="feature-shot crop-keys">
              <img src="/assets/feature-key-panel.jpg" alt="Ubicode custom key panel editor" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">08</p></div>
              <h2><span>&#9670;</span> Connection Log</h2>
              <p>Keep an audit trail of SSH connection events and location data.</p>
              <p class="feature-command"><span>$</span> connections log --secure</p>
            </div>
            <figure class="feature-shot">
              <img src="/assets/feature-connection-log.png" alt="Ubicode connection audit log screen" loading="lazy" />
            </figure>
          </article>
          <article class="feature-row">
            <div class="feature-copy">
              <div class="feature-meta"><p class="feature-index">09</p></div>
              <h2><span>&#9670;</span> AI Agent Control</h2>
              <p>Run your AI agent straight from the terminal on mobile.</p>
              <p class="feature-command"><span>$</span> agent run --mobile</p>
            </div>
            <figure class="feature-shot">
              <img src="/assets/feature-ai-agent.png" alt="Ubicode AI agent control from a mobile terminal" loading="lazy" />
            </figure>
          </article>
        </div>
        <p class="success-line"><span>&#10003;</span> 9 features loaded. All systems ready.</p>
      </section>

      <section class="beta-console console-frame reveal" id="beta">
        <div class="join-panel">
          <div class="start-panel">
            <p class="command"><span>user@ubicode:~$</span> ubicode --start</p>
            <p class="comment"># open your mobile workspace today</p>
            <h2>Start coding from<br />your iPhone today.</h2>
            <p class="join-copy">Install Ubicode via TestFlight, connect to your server, and keep moving from your phone.</p>
            <div class="community-actions">
              <a class="terminal-button primary wide" href="https://testflight.apple.com/join/4tsnW6vw">Start Now on TestFlight <span>-&gt;</span></a>
              <a class="terminal-button wide ghost" href="https://discord.gg/auNu7fkxZk">Join the Discord</a>
            </div>
          </div>
          <form class="request-form" id="request-form" onsubmit={handleRequestSubmit}>
            <p class="command"><span>user@ubicode:~$</span> ubicode --request-feature</p>
            <label for="request-text">What should Ubicode support next?</label>
            <textarea id="request-text" name="request" rows="5" placeholder="Port forwarding preset, key layout idea, agent workflow..." bind:value={requestMessage}></textarea>
            <button class="terminal-button" type="submit">Send Request</button>
            <p class="form-note" id="request-note">{requestNote}</p>
          </form>
        </div>
      </section>
    </main>

    <footer class="terminal-footer container console-frame">
      <p class="footer-line">
        <span>&copy; 2026 ubicode. All rights reserved.</span>
        <span aria-hidden="true">&middot;</span>
        <a href="/privacy">Privacy Policy</a>
        <span aria-hidden="true">&middot;</span>
        <a href="/eula">EULA</a>
      </p>
    </footer>
